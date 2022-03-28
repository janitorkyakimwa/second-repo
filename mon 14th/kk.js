const janetTemp = {
    normalTemp:37
}
if(janetTemp.normalTemp>=20 && janetTemp.normalTemp<normalTemp){
    console.log('Normal temp')
}
else if(janetTemp.normalTemp<= normalTemp && janetTemp.normalTemp>=40){
    console.log('Above normal, visit a hospital!')
}
else if(janetTemp.normalTemp>40){
    console.log('Abnormal, visit the hospital now')
}
else{
    console.log('you are not safe')
}