

export  function run() {
    const res1 = distribute([25, 25, 25, 25], 0, 60) // [85,0,0,15] <br/>
    const res2 = distribute([25, 25, 25, 25], 2, -20) // [45,25,5,25] <br />
    const res3 = distribute([25, 25, 25, 25], 1, 120) // [0,100,0,0]

    console.log(res1)
    console.log(res2)
    console.log(res3)
}


function distribute(arr: number[], index: number, val: number) {
    const maxValue = 100

    if(val + arr[index] >= maxValue || val + arr[index] < 0){
        return arr.map((_: number, i: number) => i === index ? 100 : 0)
    }
    return  arr

}

