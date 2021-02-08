// function findSongs(){
//     const searchSongBtn = document.getElementById('search-song-btn').value;

//     async function songsSearchResult(){
//         const response =  await fetch('https://api.lyrics.ovh/suggest/='+searchSongBtn);
//         const data = await response.json();
//         return data;
//     }
//     songsSearchResult().then(data => {
//         console.log(data);
//     })
//     .catch(err => alert('Please enter the valid song name'));

//     if(searchSongBtn == ''){
//         alert('Please enter the song name');
//     }
//     else{
        
//     }

//     const url = `https://api.lyrics.ovh/suggest/${searchSongBtn}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>console.log(data))
// }
// const displaySongs = songs => {
//     console.log(songs);
// };

const findSongs = () => {
    const searchSongs = document.getElementById('search-songs').value;
    
    async function songsSearchResult(){
        const response =  await fetch('https://api.lyrics.ovh/suggest/'+searchSongs);
        const data = await response.json();
        return data;
    }
    if(searchSongs === ""){
        // alert('Please enter the song name');
        document.getElementById('alert').style.display = 'block';
    }
    else{
        songsSearchResult().then(data => {
            console.log(data);
        })
        .catch(err => alert('Please enter the valid food name'));
        document.getElementById('alert').innerHTML = "";
    }
    
};
