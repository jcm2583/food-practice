import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function FoodList () {

    const dispatch = useDispatch();

    const foods = useSelector(state => state.foodList);

    const [type, updateType] = useState(foods);


    useEffect(() => {
        console.log('In useEffect');
        getFood();
    }, [])

    const getFood = () => {
        axios.get('/foods').then (response => {
            console.log('Foods are:', response.data);
        dispatch({type: "GET_FOODS", payload: response.data});
        }).catch( err => {
            console.log('Error in client GET route', err);
        });    
    }

    function handleOnDragEnd (result) {
        console.log(result);
        if (!result.destination) return;
        const items = Array.from(type);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateType(items);
    }


    return (
    <div>
        <h2>hello food</h2>
        <table>
            <thead>
            <tr>
                <th>Food Name</th>
                <th>Food Rank</th>
            </tr>
            </thead>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="foods">
                    {(provided) => (
            <tbody className="foods" {...provided.droppableProps} ref={provided.innerRef}>
            {type.map ( ({id, food_name, rank}, index) => {
                return ( 
                <Draggable key={id} draggableId={String(id)} index={index}>
                    {(provided) => (
                <tr {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <td>{food_name}</td>
                    <td>{rank}</td>
                </tr>
                )}
                </Draggable>)
            })}
            {provided.placeholder}
            </tbody>
            )}
            </Droppable>
            </DragDropContext>
        </table>
    </div>
    )
}

export default FoodList; 