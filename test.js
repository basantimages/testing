async function test() {
  const res = await fetch('https://instagram.com/hello/?__a=1&__d=dis');

  if (res.ok) {
    const rs = await res.json();
    console.log(rs);
  } else {
    console.log('not ok');
  }
}

test();
