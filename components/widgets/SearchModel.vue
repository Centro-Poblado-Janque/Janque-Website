<template>
    <form class="nav_search nav_item">
        <input class="nav-input-search" type="text" placeholder="Que desea buscar"/>
        <input type="submit" value="" id="send" hidden />
        <label for="send" class="send-search" role="button">
            <FontAwesomeIcon :icon="faSearch" />
        </label>
    </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'SeachModel',
    components: {
        FontAwesomeIcon
    },
    data: () => ({
        faSearch
    })
}
</script>
<style lang="scss">
.nav_search {
    background-color: var(--bg-input-primary);
    padding: .5rem;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-input-search{
        background-color: transparent;
        width: 100%;
        height: 100%;
    }
}
</style>