        $.ajax({
            method: "PUT",
            url: "https://api.github.com/repos/OWNER/REPO/contents/PATH/TO/FILE.txt",
            headers: {
                "Authorization": "token YOUR_GITHUB_TOKEN" // Replace with your personal access token
            },
            data: JSON.stringify({
                "message": "Commit message for the dynamic edit",
                "committer": {
                    "name": "Your Name",
                    "email": "your_email@example.com"
                },
                "content": btoa("New content for the file"), // Base64 encoded content
                "sha": "CURRENT_FILE_SHA" // Required for updating an existing file
            })
        })
        .done(function(msg) {
            console.log("Data Saved: " + msg);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error updating file: " + textStatus + ", " + errorThrown);
        });
