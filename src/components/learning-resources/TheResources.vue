<template>
    <card-wrapper>
        <button-wrapper @click="setSelectedTab('stored-resources')" :mode="storedResourceButton">Todo List</button-wrapper>
        <button-wrapper @click="setSelectedTab('add-resource')" :mode="addResourceButton">Add Todo</button-wrapper>
    </card-wrapper>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>

    import StoredResources from "./StoredResources";
    import AddResource from "./AddResource";

    export default {
        components: {
            StoredResources,
            AddResource
        },
        data() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    {
                        id: 'Cook',
                        title: 'Cook food',
                        description: 'The official fda documentation.',
                        link: 'https://fda.org',
                        date: '09-08-2021'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.org',
                        date: '09-08-2021'
                    },
                ],
            }
        },
        provide(){
            return {
                resources: this.storedResources,
                addResource: this.addResource,
                deleteResource: this.removeResource,
            }
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },
            addResource(title, description, url, date){
                const newResource = {
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: url,
                    date: date
                }
                this.storedResources.unshift(newResource);
                this.selectedTab = 'stored-resources'
            },
            removeResource(resId){
                const resIndex = this.storedResources.findIndex(res=>res.id===resId);
                this.storedResources.splice(resIndex, 1);
            }
        },
        computed: {
          storedResourceButton(){
              return this.selectedTab === 'stored-resources' ? null : 'flat'
          },
          addResourceButton(){
              return this.selectedTab === 'add-resource' ? null: 'flat'
          },
        },
        name: "TheResources"
    }
</script>

<style scoped>

</style>
