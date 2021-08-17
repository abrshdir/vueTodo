<template>
    <modal-wrapper v-if="inputIsInvalid" title="Input Is Invalid" @close="confirmError">
        <template #default>
            <p>Your input is Invalid. Please check your inputs</p>
        </template>
        <template #actions>
            <button-wrapper @click="confirmError">
                Okay
            </button-wrapper>
        </template>
    </modal-wrapper>
    <card-wrapper>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" ref="titleInput" name="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea rows='3' type="text" id="description" ref="descInput" name="description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="text" id="link" ref="linkInput" name="link">
            </div>
            <div class="form-control">
                <label for="date">Date</label>
                <input type="date" id="date" ref="dateInput" name="link">
            </div>
            <div>
                <button-wrapper type="submit">Add Resource</button-wrapper>
            </div>
            <div></div>
            <div></div>
        </form>
    </card-wrapper>
</template>

<script>
    export default {
        inject: ['addResource'],
        data() {
            return {
                inputIsInvalid: false,
            }
        },
        methods: {
            submitData() {
                const enteredTitle = this.$refs.titleInput.value;
                const enteredDescription = this.$refs.descInput.value;
                const enteredLink = this.$refs.linkInput.value;
                const enteredDate = this.$refs.dateInput.value;
                if(enteredTitle.trim()==='' || enteredDescription.trim() === '' || enteredLink.trim()==='' || enteredDate.trim()==='') {
                    this.inputIsInvalid = true;
                    return;
                }
                this.addResource(enteredTitle, enteredDescription, enteredLink, enteredDate);
            },
            confirmError(){
                this.inputIsInvalid = false
            }
        },
    }
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>
