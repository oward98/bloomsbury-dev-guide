import React from 'react';
import './Masonry.css';

class Masonry extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [];
        this.state = {}
        this.allocateChildrenToColumns = this.allocateChildrenToColumns.bind(this);
    }

    allocateChildrenToColumns() {
        const masonryContainer = document.getElementById('masonryContainer');
        
        const containerWidthPx = masonryContainer.clientWidth;
        const columnWidthPx = 300;

        const numberOfColumns = Math.floor(containerWidthPx/columnWidthPx);

        const children = this.props.children;

        if (!children) return;

        const columnChildren = [];

        const numberOfChildren = children.length;

        for (let j=0; j<numberOfColumns; j++) {
            columnChildren[j] = [];
        }

        for (let i=0; i< numberOfChildren; i++) {
            const columnIndexForChild = i%numberOfColumns;
            const child = children[i];
            columnChildren[columnIndexForChild].push(child);
        }

        this.columns = columnChildren;
        this.setState({currentWidth: containerWidthPx});
    }

    componentDidMount() {
        this.allocateChildrenToColumns();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children.length !== this.props.children.length) {
            this.allocateChildrenToColumns();
            return;
        }
        const masonryContainer = document.getElementById('masonryContainer');
        const containerWidthPx = masonryContainer.clientWidth;
        const previousContainerWidthPx = this.state.currentWidth;
        if (containerWidthPx !== previousContainerWidthPx) {
            this.allocateChildrenToColumns();
            return;
        }
    }
    
    render() {
        const columnsToRender = this.columns.map((listOfChildren, index) => {
            return (
                <div className='masonryColumn' key={index}>
                    {listOfChildren}
                </div>
            )
        })

        return (
            <div id='masonryContainer'>
                {columnsToRender}
            </div> 
        )
    }
}

export { Masonry }