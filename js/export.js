var Export = {
  toJSON: function() {
    try {
      var json = Storage.export();
      var blob = new Blob([json], { type: 'application/json' });

      var now = new Date();
      var dateStr = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +
        String(now.getDate()).padStart(2, '0');

      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'portfolio_backup_' + dateStr + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);

      showToast('数据已导出 ✓', 'success');
    } catch (e) {
      showToast('导出失败: ' + e.message, 'error');
    }
  },

  fromJSON: function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.addEventListener('change', function() {
      var file = input.files && input.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function(e) {
        try {
          var json = JSON.parse(e.target.result);
          if (!json.meta || !json.meta.version) {
            throw new Error('Invalid format');
          }

          showConfirm('导入将覆盖当前所有数据，确定继续？', function() {
            try {
              Storage.import(e.target.result);
              showToast('数据已导入，页面即将刷新', 'success');
              setTimeout(function() { location.reload(); }, 1000);
            } catch (err) {
              showToast('导入失败: ' + err.message, 'error');
            }
          });
        } catch (err) {
          showToast('文件格式无效，请使用正确的备份文件', 'error');
        }
      };
      reader.readAsText(file);
    });

    input.click();
  },

  toHTML: function() {
    // Optional: export as standalone HTML
    showToast('暂不支持导出为 HTML', 'warning');
  }
};

window.Export = Export;
