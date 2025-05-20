import getData from "./lib/service.js"; 

/*run adında async bir fonksiyon tanımladık ki await kullanabilelim.
getData(1) çağırıp, 1 numaralı kullanıcıyı çektik.
Sonucu konsola bastık.
run() fonksiyonunu çağırdık, kodun çalışması için.*/
const run = async () => {
    const result = await getData(1);
    console.log(result);
    console.table(result.posts);
}

run();

