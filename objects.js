var playlist={shamak:"mohabbat kar le kar le"};

function updatePlaylist(playlist,name,value){
  return Object.assign(playlist,{[name]:value})
}