var family_member_names = [
  "Mom, Jayshri Rao",
  "Dad, Kamalesh Rao",
  "Little Brother, Mahir Rao",
  ];
  var images = [
  "https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F118620594_345553159880234_6707348639444217232_n.jpg%3Foh%3Dab3f74d1b7a92abcc8e8223de35c123f%26oe%3D5FF2554B&t=l&u=919978967866%40c.us&i=1599105825&n=5hcNCI7u07OW5STgtEjOWhfwcpTgZ8m1HtZ5MaQ8Rs4%3D",
  "Dad, Kamalesh.jpg",
  "Little Brother, Mahir.jpg",
  ];
  var i = 0;
  function onclick() {
  document.getElementById("album").src = images[i];
  document.getElementById("family_member_name").innerHTML = family_member_names[i];
  i++;
  }