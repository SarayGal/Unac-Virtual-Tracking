exports.index = function (req, res) {
    message = '';
    if (req.method == "POST") {
        var post  = req.body;
        var fname = post.file;
        

        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        var file = req.files.file_name;
        var img_name = file.name;

        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png"  || file.mimetype == "application/pdf" || file.mimetype == "application/msword" || file.mimetype == "application/vnd.ms-powerpoint") {

            file.mv('uploads' + file.name, function (err) {

                if (err)

                    return res.status(500).send(err);
                var sql = "INSERT INTO `documents`(`file`) VALUES ('" + img_name + "')";

                var query = db.query(sql, function (err, result) {
                    res.send({
                        status: true,
                        message: "File is uploaded",
                      })
                });
            });
        } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.send({
                status: true,
                message: "waiting file one"
              })
        }
    } else {
        res.send({
            status: true,
            message: "File is uploaded",
          })
    }

};

exports.profile = function (req, res) {
    var message = '';
    var id = req.params.id;
    var sql = "SELECT * FROM `documents` WHERE `id`='" + id + "'";
    db.query(sql, function (err, result) {
        if (result.length <= 0)

            res.send( 'view the files' );
    });
};
