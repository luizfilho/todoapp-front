import React from 'react'
import If from '../template/if'

export default props =>{
    if(props.test) {
        return props.children
    }else{
        return false
    }
}
