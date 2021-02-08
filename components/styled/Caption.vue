<template>
    <CompleteView>
        <TextView>
            <TextCaption>{{ title }}</TextCaption>
        </TextView>
    </CompleteView>
</template>

<script>
import styled from 'vue-styled-components';

const CompleteView = styled.div`
    min-height: 80vh;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextView = styled.div`
    padding: 1.5rem;
    width: 90%;
    margin-bottom: 10%;
    text-align: center;
    background-color: rgba(0,0,0,.35);
    border: 1px solid var(--grey-border);
    border-radius: 2px;
`;
const TextCaption = styled.h1`
    color: var(--light-primary);
    width: 100%;
    margin: 0;
    font-size: 2.4rem;
    @media screen and (min-width: 1200px){
        font-size: 3rem;
    }
`;
export default {
    name: 'Caption',
    components:{
        TextView,
        TextCaption,
        CompleteView
    },
    props:{
        title: String
    }
}
</script>