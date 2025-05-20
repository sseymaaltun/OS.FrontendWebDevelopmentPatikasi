import axios from "axios"; //JavaScript'te HTTP istekleri yapmak için kullanılan popüler bir kütüphanedir. İnternetten veri çekmek veya sunucuya veri göndermek için kullanılır.

const getData = async (userId) => {
    /*axios.get(...) ifadesi HTTP GET isteği yapar.
    await sayesinde sonucu bekliyoruz.
    .data ile asıl veriye ulaşıyoruz.*/

    //Verilen userId'ye göre kullanıcı bilgilerini çekmek.
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); 
    const user = userResponse.data;

    //Aynı userId için post'ları çekmek.
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = postsResponse.data;

    //Kullanıcı objesine posts özelliği ekle
    user.posts = posts;

    return user;
};

export default getData;