<template>
    <TextView>
        <TextCaption>{{ title }}</TextCaption>
    </TextView>
</template>

<script>
import styled from 'vue-styled-components';

const TextView = styled.div`
    padding: 1.5rem;
    width: 80%;
    text-align: center;
    margin: 20% auto;
`;
const TextCaption = styled.h1`
    color: var(--dark-primary);
    width: 100%;
    margin: 0;
    font-size: 3rem;
`;
export default {
    name: 'Caption',
    components:{
        TextView,
        TextCaption
    },
    props:{
        title: String
    }
}
</script>

<style>

</style>