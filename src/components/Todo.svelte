<script>
    import { createEventDispatcher, tick } from 'svelte';
    import { selectOnFocus } from '../actions';
    const dispatch = createEventDispatcher();
    export let todo;

    let editing = false; // track editing mode
    let name = todo.name; // hold the name of the todo being edited
    let nameEl; // reference to the name input DOM node
    let editButtonPressed = false;

    function update(updatedTodo) {
        todo = {...todo, ...updatedTodo}; // applies modification to todo
        dispatch('update', todo); // emit update event
    }

    function onCancel() {
        name = todo.name;
        editing = false;
    }

    function onSave() {
        update({ name: name });
        editing = false;
    }

    function onRemove() {
        dispatch('remove', todo);
    }

    async function onEdit() {
        editButtonPressed = true;
        editing = true;
        await tick();
        nameEl.focus();
    }

    // action
    const focusEditButton = (node) => editButtonPressed && node.focus();

    function onToggle() {
        update({ completed: !todo.completed });
    }
</script>

<div class="stack-small">
    {#if editing}
        <!-- markup for editing todo: label, input text, Cancel and Save Button -->
        <form
            on:submit|preventDefault={onSave}
            class="stack-small"
            on:keydown={ (e) => e.key === 'Escape' && onCancel() }
        >
            <div class="form-group">
                <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
                <input
                    bind:value={name}
                    bind:this={nameEl}
                    use:selectOnFocus
                    type="text"
                    id="todo-{todo.id}"
                    autocomplete="off"
                    class="todo-text"
                >
            </div>
            <div class="btn-group">
                <button type="button" class="btn todo-cancel" on:click={onCancel}>
                    Cancel <span class="visually-hidden">renaming {todo.name}</span>
                </button>
                <button type="submit" class="btn btn__primary todo-edit" disabled={!name}>
                    Save <span class="visually-hidden">new name for {todo.name}</span>
                </button>
            </div>
        </form>
    {:else}
        <!-- markup for displaying todo: checkbox, label, Edit and Delete Button -->
        <div class="c-cb">
            <input
                type="checkbox"
                id="todo-{todo.id}"
                on:click={onToggle}
                checked={todo.completed}
            >
            <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
        </div>
        <div class="btn-group">
            <button
                type="button"
                class="btn"
                on:click={onEdit}
                use:focusEditButton
            >
                Edit <span class="visually-hidden">{todo.name}</span>
            </button>
            <button
                type="button"
                class="btn btn__danger"
                on:click={onRemove}
            >
                Delete <span class="visually-hidden">{todo.name}</span>
            </button>
        </div>
    {/if}
</div>