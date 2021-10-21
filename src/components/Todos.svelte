<script>
    import NewTodo from './NewTodo.svelte';
    import FilterButton from './FilterButton.svelte';
    import TodosStatus from './TodosStatus.svelte';
    import Todo from './Todo.svelte';
    import MoreActions from './MoreActions.svelte';

    export let todos = [];

    let todosStatus; // reference to TodosStatus instance

    $: newTodoId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1

    function addTodo(name) {
      todos = [...todos, { id: newTodoId, name: name, completed: false }];
    }

    function removeTodo(todo) {
        todos = todos.filter((t) => t.id !== todo.id);
        todosStatus.focus();
    }

    function updateTodo(todo) {
      const i = todos.findIndex( (t) => t.id === todo.id );
      todos[i] = {...todos[i], ...todo};
    }

    let filter = 'all';

    const filterTodos = (filter, todos) => {
      if (filter === 'active') {
        return todos.filter(t => !t.completed);
      } else if (filter === 'completed') {
        return todos.filter(t => t.completed);
      } else {
        return todos; // all
      }
    }

    const checkAllTodos = (completed) => { 
      todos = todos.map( (t) => {
        return {...t, completed: completed};
      });
    };
    
    const removeCompletedTodos = () => todos = todos.filter( (t) => !t.completed );
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