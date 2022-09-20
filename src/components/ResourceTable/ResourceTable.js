import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableInput from '../TableInput/TableInput';

function ResourceTable({
    tier
}) {
    const {resources} = useSelector((state) => state.user);
    return (
        <>
            {/* <button onClick={() => dispatch(getResourcePrice())} >btn </button> */}
            {/* sone stnrewo;vn;eroinvoerinv';orienv' */}
            <table>
                <tbody>
                    <tr>
                        <th>Tier {tier}</th>
                        <th>.0</th>
                        <th>.1</th>
                        <th>.2</th>
                        <th>.3</th>
                    </tr>
                    <tr>
                        <td>Plank</td>
                        <td><TableInput uniqueName={`T${tier}_PLANKS`} /></td>
                        <td><TableInput uniqueName={`T${tier}_PLANKS_LEVEL1@1`} /></td>
                        <td><TableInput uniqueName={`T${tier}_PLANKS_LEVEL2@2`} /></td>
                        <td><TableInput uniqueName={`T${tier}_PLANKS_LEVEL3@3`} /></td>
                    </tr>
                    <tr>
                        <td>Metal</td>
                        <td><TableInput uniqueName={`T${tier}_METAL`} /></td>
                        <td><TableInput uniqueName={`T${tier}_METAL_LEVEL1@1`} /></td>
                        <td><TableInput uniqueName={`T${tier}_METAL_LEVEL2@2`} /></td>
                        <td><TableInput uniqueName={`T${tier}_METAL_LEVEL3@3`} /></td>
                    </tr>
                    <tr>
                        <td>Cloth</td>
                        <td><TableInput uniqueName={`T${tier}_CLOTH`} /></td>
                        <td><TableInput uniqueName={`T${tier}_CLOTH_LEVEL1@1`} /></td>
                        <td><TableInput uniqueName={`T${tier}_CLOTH_LEVEL2@2`} /></td>
                        <td><TableInput uniqueName={`T${tier}_CLOTH_LEVEL3@3`} /></td>
                    </tr>
                    <tr>
                        <td>Leather</td>
                        <td><TableInput uniqueName={`T${tier}_LEATHER`} /></td>
                        <td><TableInput uniqueName={`T${tier}_LEATHER_LEVEL1@1`} /></td>
                        <td><TableInput uniqueName={`T${tier}_LEATHER_LEVEL2@2`} /></td>
                        <td><TableInput uniqueName={`T${tier}_LEATHER_LEVEL3@3`} /></td>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}

export default ResourceTable;