<script lang="ts">
    import NewTodo from './NewTodo.svelte';
    import FilterButton from './FilterButton.svelte';
    import TodosStatus from './TodosStatus.svelte';
    import Todo from './Todo.svelte';
    import MoreActions from './MoreActions.svelte';
    import { alert } from '../stores';

    import type { TodoType } from '../types/todo.type';
    import { Filter } from '../types/filter.enum';

    export let todos: TodoType[] = [];
    
    let todosStatus: TodosStatus; // reference to TodosStatus instance

    $: newTodoId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1

    function addTodo(name: string) {
      todos = [...todos, { id: newTodoId, name: name, completed: false }];
      $alert = `Todo '${name}' has been added`;
    }

    function removeTodo(todo: TodoType) {
        todos = todos.filter((t) => t.id !== todo.id);
        todosStatus.focus();
        $alert = `Todo '${todo.name}' has been deleted`;
    }

    function updateTodo(todo: TodoType) {
      const i = todos.findIndex( (t) => t.id === todo.id );
      if (todos[i].name !== todo.name) {
        $alert = `Todo '${todos[i].name}' has been renamed to '${todo.name}'`;
      }
      if (todos[i].completed !== todo.completed) {
        $alert = `Todo '${todos[i].name}' has been marked as '${todo.completed ? Filter.COMPLETED : Filter.ACTIVE}'`;
      }
      todos[i] = {...todos[i], ...todo};
    }

    let filter: Filter = Filter.ALL;

    $: {
      if (filter === Filter.ALL) {
        $alert = 'Browsing all todos';
      }
      if (filter === Filter.ACTIVE) {
        $alert = 'Browsing active todos';
      }
      if (filter === Filter.COMPLETED) {
        $alert = 'Browsing completed todos';
      }
    };

    const filterTodos = (filter: Filter, todos: TodoType[]) => {
      if (filter === Filter.ACTIVE) {
        return todos.filter(t => !t.completed);
      } else if (filter === Filter.COMPLETED) {
        return todos.filter(t => t.completed);
      } else {
        return todos; // all
      }
    }

    const checkAllTodos = (completed: boolean) => { 
      todos = todos.map( (t) => {
        return {...t, completed: completed};
      });
      $alert = `${completed ? 'Checked' : 'Unchecked'} ${todos.length} todos`;
    };
    
    const removeCompletedTodos = () => {
      $alert = `Removed ${todos.filter((t) => t.completed).length} todos`;
      todos = todos.filter( (t) => !t.completed );
    }
</script>

<!-- Todos.svelte -->
<div class="todoapp stack-large">

  <NewTodo autofocus on:addTodo={ (e) => addTodo(e.detail) } />
  <FilterButton bind:filter /><!-- shorthand for bind:filter={filter} -->

  <!-- TodosStatus -->
  <TodosStatus bind:this={todosStatus} {todos} />

  <!-- Todos -->
  <ul role="list" class="todo-list stack-large" aria-labelledby="list-heading">
    {#each filterTodos(filter, todos) as todo (todo.id)}
        <li class="todo">
            <Todo {todo}
              on:update={ (e) => updateTodo(e.detail) }
              on:remove={ (e) => removeTodo(e.detail) }
            />
        </li>
    {:else}
        <li>Nothing to do here!</li>
    {/each}
  </ul>

  <hr />

  <MoreActions {todos} 
    on:checkAll={ (e) => checkAllTodos(e.detail) }
    on:removeCompleted={removeCompletedTodos}
  />
</div>