import React from 'react';
import s from './Packs.module.css'
import {Title} from "../../../../d2-common/components/Title/Title";

export const Packs = () => {
    return (
        <div className={s.container}>
            <Title text="Packs"/>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col" style={{width: "10%"}}>ID</th>
                    <th scope="col" style={{width: "10%"}}>Name</th>
                    <th scope="col" style={{width: "10%"}}>Price $</th>
                    <th scope="col" style={{width: "10%"}}>Quantity</th>
                    <th scope="col" style={{width: "10%"}}>Total $:</th>
                    <th scope="col" style={{width: "10%"}}>Total €:</th>
                    <th scope="col" style={{width: "20%"}}>Remove:</th>
                    <th scope="col" style={{width: "20%"}}>Change Quantity:</th>
                </tr>
                </thead>

                {/*{state.products.map((data, myKey) =>*/}
                {/*    <tbody key={myKey}>*/}
                {/*    <tr>*/}
                {/*        <td>{data.id}</td>*/}
                {/*        <td>{data.name}</td>*/}
                {/*        <td>{data.price}</td>*/}
                {/*        <td>{data.quantity}</td>*/}
                {/*        <td>{data.quantity*data.price}</td>*/}
                {/*        <td>{Math.round(data.quantity*data.price*0.92)}</td>*/}
                {/*        <td>*/}
                {/*            <button type="button" onClick={(e)=>this.handleSubmitRemove(data.id)} className="btn btn-danger">Remove</button>*/}
                {/*        </td>*/}
                {/*        <td>*/}
                {/*            <button  style={{margin: "3px"}}  type="button" onClick={(e)=> updateCart(data.id,1)}>+</button>*/}
                {/*            <button  style={{margin: "3px"}} disabled={data.quantity==1} type="button" onClick={(e)=> updateCart(data.id,-1)}>-</button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*    </tbody>*/}
                {/*)}*/}

            </table>
        </div>
    );
};

