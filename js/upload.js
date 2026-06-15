var Upload = {
  image: function(inputElement, callback) {
    var file = inputElement.files && inputElement.files[0];
    if (!file) return;

    if (!file.type.match(/^image\//)) {
      alert('请选择图片文件');
      return;
    }

    if (!this.validateImageSize(file, 5)) {
      alert('图片大小不能超过 5MB');
      return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result);
    };
    reader.onerror = function() {
      alert('图片读取失败，请重试');
    };
    reader.readAsDataURL(file);
  },

  images: function(inputElement, callback, maxCount) {
    var files = inputElement.files;
    if (!files || files.length === 0) return;

    var results = [];
    var loaded = 0;
    var max = Math.min(files.length, maxCount || 4);
    var totalSize = 0;

    for (var i = 0; i < max; i++) {
      var file = files[i];

      if (!file.type.match(/^image\//)) {
        alert('"' + file.name + '" 不是图片文件，已跳过');
        continue;
      }

      totalSize += file.size;
      if (totalSize > 10 * 1024 * 1024) {
        alert('图片总大小不能超过 10MB');
        break;
      }

      if (!this.validateImageSize(file, 3)) {
        alert('"' + file.name + '" 大小超过 3MB，已跳过');
        continue;
      }

      (function(index, file) {
        var reader = new FileReader();
        reader.onload = function(e) {
          results.push(e.target.result);
          loaded++;
          if (loaded === max || i === max - 1) {
            callback(results);
          }
        };
        reader.readAsDataURL(file);
      })(i, file);
    }

    if (max === 0) callback([]);
  },

  file: function(inputElement, callback) {
    var file = inputElement.files && inputElement.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result, file.name);
    };
    reader.readAsText(file);
  },

  validateImageSize: function(file, maxMB) {
    return file.size <= maxMB * 1024 * 1024;
  },

  pdf: function(inputElement, callback) {
    var file = inputElement.files && inputElement.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('请选择 PDF 文件');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('PDF 大小不能超过 2MB');
      return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result, file.name);
    };
    reader.onerror = function() {
      alert('PDF 读取失败，请重试');
    };
    reader.readAsDataURL(file);
  }
};

window.Upload = Upload;
