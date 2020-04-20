import { Component } from "./Component";

/**
 *  Pseudo Template: Text
 *  React Native: Text
 *  Flutter: Text
 * 
 */
export interface Text extends Component {
    text: string,
    fontSize: number,
    color: string,
}