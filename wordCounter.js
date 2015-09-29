var totalWords   = 0;
var assets       = $('.items.assets .asset.asset-text');
var currentAsset = -1;

function wordCounter() {
  
  if (assets.eq(currentAsset).hasClass('asset-open')) {
    
    var text = assets.eq(currentAsset).find('fieldset.textarea textarea').val().trim();
  
    totalWords += text.split(' ').length;
    
    nextAsset()    
  } else {
    setTimeout(function () {
      wordCounter();    
    }, 100);
  }
};


function nextAsset() {
  ++currentAsset;
  
  console.info(currentAsset, 'totalWords'+totalWords);
	assets.eq(currentAsset).find('header.asset.clickable').mouseover().click();
  
  setTimeout(function () {
    wordCounter();
  }, 100);
  
};

nextAsset();

