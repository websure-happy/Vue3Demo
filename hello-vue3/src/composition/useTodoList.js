import {ref,watchEffect} from "vue"
import * as todoStorage from "../utils/LocalStorage";
export default function  useTodoList(){
    const todosRef =ref(todoStorage.fetch());
     watchEffect(()=>{
         todoStorage.save(todosRef.value);
     })
    return {
        todosRef,
    }
}