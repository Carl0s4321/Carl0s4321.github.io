document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('.item-image');
    divs.forEach(function (div) {
        var src = div.getAttribute('data-src');
        div.style.backgroundImage = "url('" + src + "')";
    });
});

// const items = [
//     { title: 'StudyBuddy', image: 'asset/studdyBuddyPic.png', description: 'Lorem Ipsum', link: 'StudyBuddy.html' },
//     { title: 'Two Kings', image: 'asset/twoKingsPic.png', description: 'Lorem Ipsum', link: 'TwoKings.html' },
//     { title: 'Snake Snack', image: 'asset/snakeSnackPic.png', description: 'Lorem Ipsum', link: 'SnakeSnack.html' }
// ];

// const container = document.getElementById('items-container');

// container.innerHTML = "";

// items.forEach(item => {
//     const itemDiv = document.createElement('div');
//     itemDiv.classList.add('item', item.title.length > 10 ? 'large' : 'medium');
//     container.appendChild(itemDiv);
    
//     const link = document.createElement('a');
//     link.href = item.link;
//     itemDiv.appendChild(link);
    
//     const itemContent = document.createElement('div');
//     itemContent.classList.add('item-content');
    
//     const itemImage = document.createElement('div');
//     itemImage.classList.add('item-image');
//     itemImage.setAttribute('data-src', item.image);
    
//     const itemCaption = document.createElement('div');
//     itemCaption.classList.add('item-caption');
    
//     const itemOverlay = document.createElement('div');
//     itemOverlay.classList.add('item-overlay');
    
//     const itemTitle = document.createElement('div');
//     itemTitle.classList.add('item-title');
//     itemTitle.textContent = item.title;
    
//     const itemSub = document.createElement('div');
//     itemSub.classList.add('item-sub');
    
//     const itemDesc = document.createElement('div');
//     itemDesc.classList.add('item-desc');
//     itemDesc.textContent = item.description;
    
//     const readMore = document.createElement('div');
//     readMore.classList.add('read-more');
//     readMore.textContent = 'Read more';
    
//     itemSub.appendChild(itemDesc);
//     itemSub.appendChild(readMore);
    
//     itemOverlay.appendChild(itemTitle);
//     itemOverlay.appendChild(itemSub);
    
//     itemCaption.appendChild(itemOverlay);
    
//     itemContent.appendChild(itemImage);
//     itemContent.appendChild(itemCaption);
    
//     link.appendChild(itemContent);
    
    
    
   
// });