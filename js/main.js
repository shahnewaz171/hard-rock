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
            // console.log(data.data);
            displaySongs(data.data);
        })
        .catch(err => alert('Please enter the valid food name'));
    }
    
};

const displaySongs = songItems => {
    const songsInfo = document.getElementById('songs');

    songItems.forEach(song => {
        console.log(song);
        const singleSongDiv = document.createElement('div');
        singleSongDiv.className = 'single-result row align-items-center my-3 p-3';
        
        const songsAllInfo = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.album.title}</span></p>
                <audio controls>
                    <source src="${song.preview}" type="audio/ogg">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        singleSongDiv.innerHTML = songsAllInfo;
        songsInfo.appendChild(singleSongDiv);
    });
    document.getElementById('search-songs').value = "";
    document.getElementById('alert').innerHTML = "";
};