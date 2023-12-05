export function getValue(field: string) {
  const regex = /(\w+)|\[['"]?(.*?)['"]?\]/g;

  const fieldParts = [];
  let match;

  // Regex ile eşleşen tüm parçaları bul
  while ((match = regex.exec(field)) !== null) {
    const part = match[1] || match[2];
    fieldParts.push(part);
  }

  return (dataItem: object) => {
    let res = dataItem;
    for (const f of fieldParts) {
      if (!res || typeof res !== 'object') {
        return res;
      }
      res = res[f];
    }

    return res;
  };
}
