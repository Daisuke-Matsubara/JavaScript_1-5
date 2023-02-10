function createJuice(fruits){
    console.log(`${fruits}を受け取りました。ジュースにして返します`);
    //指定の果物でジュースを作る処理
    return console.log(`${fruits}ジュースが届きました`)
}

let orangeJuice = createJuice('みかん');
let appleJuice = createJuice('りんご');
let grapeJuice = createJuice('ぶどう');
