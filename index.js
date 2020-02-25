function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(para = "special"){
        return `You are ${flair}${para}${flair}!`
    }
}

let Calculator = {
    add:function(){return 1+3},
    subtract:function(){return 1-3},
    multiply:function(){return 1*3},
    divide:function(){return 10/5}
}

function actionApplyer(startInt, array){
    if (array.length > 0){
        array.forEach(functionInArray => startInt = functionInArray(startInt))
    }
    return startInt;
}