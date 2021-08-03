window.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    $("#side-block").css("visibility", "visible");
  } else {
    $("#side-block").css("visibility", "hidden");
  }
};

// $('#top-follow');
// $('#side-follow');
// $('.follow-button');

// $('#facebook');
// $('#linkedin');
// $('#twitter');
// $('#bookmark');
// $('#claps');
// $('#comment');
