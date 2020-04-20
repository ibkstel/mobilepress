import { Component } from "./Component";

/**
 *  Pseudo Template: View
 *  React Native: View
 *  Flutter: Container, Column, Row
 * 
 */

export interface View extends Component {
    
    children: Array<any>,
    margin:number,
    padding:number,
    color:string,
    borderRadius:number,
    flexDirection:string,
    
}