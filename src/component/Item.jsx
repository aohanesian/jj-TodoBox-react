import React from 'react';

function Item(props) {
    return (
        <div id={props.id}>
            <div className="row">
                <div className="col-auto">
                    <button onClick={props.onRemove} type="button" className="btn btn-primary btn-sm">-</button>
                </div>
                <div className="col">{props.task}</div>
            </div>
            <hr/>
        </div>
    );
}

export default Item;