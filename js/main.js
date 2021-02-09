//API connect from search box with validation
const findSongs = () => {
    const searchSongs = document.getElementById('search-songs').value;
    
    async function songsSearchResult(){
        const response =  await fetch('https://api.lyrics.ovh/suggest/'+searchSongs);
        const data = await response.json();
        return data;
    }
    if(searchSongs === ""){
        // alert('Please enter the song name');
        // displayError("");
        document.getElementById('error-message').innerText = 'Please enter the song name!!';
    }
    else{
        songsSearchResult().then(data => {
            // console.log(data.data.artist.name);
            displaySongs(data.data);
            
        })
        .catch(error => displayError("Something went wrong!! Please try again later!"));
    }
    
};


//Create song list using forEach and arrow method with validation
const displaySongs = songItems => {
    const songsInfo = document.getElementById('songs');
    cleanPreviousInfo('songs');
 
    songItems.forEach(song => {
        // console.log(song);
        const singleSongDiv = document.createElement('div');
        singleSongDiv.className = 'single-result row align-items-center my-3 p-3';
        
        const songsAllInfo = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.album.title}</span></p>
                <audio controls>
                    <source src="${song.preview}">
                </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="displaySongLyrics('${song.artist.name}',' ${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        singleSongDiv.innerHTML = songsAllInfo;
        songsInfo.appendChild(singleSongDiv);
    });
    document.getElementById('search-songs').value = "";
    document.getElementById('error-message').innerText = "";
};



//Display Lyrics
const displaySongLyrics = async (artist, title) => {
    // console.log(artist, title);
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        renderSongLyrics(data.lyrics);
    }
    catch (error) {
        displayError("Sorry! I failed to load lyrics, Please try again later!");
    }
}; 

const renderSongLyrics = lyrics => {
    const songLyrics = document.getElementById('lyrics');
    if(songLyrics){
        songLyrics.innerText = lyrics; 
        document.getElementById('songs').style.display = "none";
    }
};

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
};

//Clear previous search item
const cleanPreviousInfo = details => {
    const FoodDetails = document.getElementById(details);
    FoodDetails.innerHTML = "";
};


//For Mobile navBar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



// //API connect from search box with validation
// const findSongs = () => {
//     const searchSongs = document.getElementById('search-songs').value;
    
//     async function songsSearchResult(){
//         const response =  await fetch('https://api.lyrics.ovh/suggest/'+searchSongs);
//         const data = await response.json();
//         return data;
//     }
//     if(searchSongs === ""){
//         // alert('Please enter the song name');
//         displayError("Please enter the song name!!");
//     }
//     else{
//         songsSearchResult().then(data => {
//             // console.log(data.data.artist.name);
//             displaySongs(data.data);
            
//         })
//         .catch(error => displayError("Something went wrong!! Please try again later!"));
//     }
    
// };
