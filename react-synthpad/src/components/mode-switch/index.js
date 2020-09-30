import React from 'react';
import { useAppContext } from '../../context';


export default () => {
    const { state, dispatch} = useAppContext()

    const styles = {
        marginBottom: 20
    }


    return (
        <select onChange={e => dispatch({ type: 'TOGGLE_MODE', payload: e.target.value })} 
        value={state.mode} 
        style={styles}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}