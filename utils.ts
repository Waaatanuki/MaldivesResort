function getPrice(str: string) {
  const arr = str.split('+')
  const p1 = Number(arr[0].trim().replace(/\D/g, ''))
  const p2 = Number(arr[1].trim().replace(/\D/g, ''))
  const sum = p1 + p2
  console.log(`${(sum / 10000).toFixed(2)}w`)
}

getPrice(' 27,963元+8,058元')
