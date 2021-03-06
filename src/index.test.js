import expect from 'expect';

const MAX_DELAY = 10;

// before('hook', function(){
//   throw new Error('error');
// });

describe('Our first suite', () => {

  describe('Our second suite', () => {

    it('test 2.1', (done) => {
      let num = getRand(0, MAX_DELAY);
      setTimeout(function(){return getBoolFalse(done);}, 5000);
    });

    it('test 2.2', (done) => {
      let num = getRand(0, MAX_DELAY);
      setTimeout(function(){return getBoolTrue(done);}, num);
    });

    it('test 2.3', (done) => {
      let num = getRand(0, MAX_DELAY);
      setTimeout(function(){return getBoolTrue(done);}, num);
    });

    it('test 2.4', (done) => {
      let num = getRand(0, MAX_DELAY);
      setTimeout(function(){return getBoolTrue(done);}, num);
    });
  });

  it('test 1.1', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 1.2', (done) => {
    getBoolTrue(done);
    // let num = getRand(0, 5000);
    // setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our third suite', () => {

  it('test 3.1', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 3.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our fourth suite', () => {

  it('test 4.1', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 4.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 4.3', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 4.4', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, 20000);
  });

  it('test 4.5', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });
});

describe('Our fifth suite', () => {

  it('test 5.1', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 5.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });
});

describe('Our sixth suite', () => {

  it('test 6.1', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 6.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });
  it('test 6.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });
});

describe('Our seventh suite', () => {

  it('test 7.1', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolTrue(done);}, num);
  });

  it('test 7.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });

  it('test 6.2', (done) => {
    let num = getRand(0, MAX_DELAY);
    setTimeout(function(){return getBoolFalse(done);}, num);
  });
});

function getBoolTrue(done) {
  expect(true).toEqual(true);
  done();
}

function getBoolFalse(done) {
  try{
    expect(false).toEqual(true);
    done();
  }
  catch(error){
    done(error);
  }

}

function getRand(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);

  let rand = Math.floor(Math.random() * (max - min + 1) + min);

  return rand;
}
