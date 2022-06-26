      new Twitch.Embed("orrinn", {
        width: 854,
        height: 480,
        channel: "orrinn",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
      });

      new Twitch.Embed("selfishlock", {
        width: 854,
        height: 480,
        channel: "selfishlock",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
      });

      new Twitch.Embed("beercityboardgames", {
        width: 854,
        height: 480,
        channel: "beercityboardgames",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
      });

      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth()+1;
      var year = today.getFullYear();
      if (day < 10) {
        day = '0'+day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      document.querySelector('#date').innerHTML='Orrinn and Kylaris &copy;' + month + "/" + day + "/" + year;