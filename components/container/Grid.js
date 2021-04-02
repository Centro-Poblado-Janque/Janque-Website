import styled from 'vue-styled-components';

const CustomProps = {
    Rows: {
        type: Number,
        required: true,
        default: 2
    },
    tag: 'div',
    ColumnGap: String,
    RowGap: String,
}
const SimpleProps = {
    tag: 'div',
    ColumnGap: String,
    RowGap: String,
    Columns: String
}

export const Grid = styled('div', CustomProps)`
    display: grid;
    grid-template-columns: 100%;
    column-gap: ${props => props.ColumnGap || 'var(--grid-gap)'} ;
    row-gap: ${props => props.RowGap || 'var(--grid-gap)'};
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-width);
    @media (min-width: 1200px){
        grid-template-columns: repeat(${props => props.Rows || 1} 
            ,calc(${props => (100 / props.Rows)}% - var(--grid-gap)* ${props => (props.Rows - 1) || 0}/${props => props.Rows || 1}));
    }
`;

export const SimpleGrid = styled(SimpleProps.tag, SimpleProps)`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    column-gap: ${props => props.ColumnGap || 'var(--grid-gap)'} ;
    row-gap: ${props => props.RowGap || 'var(--grid-gap)'};
    width: 100%;
    margin-left: auto;
    align-content: center;
    height: 100%;
    margin-right: auto;
    max-width: var(--max-width);
    @media (min-width: 1200px){
        grid-template-columns: ${props => props.Columns || '1fr'};
    }
`;