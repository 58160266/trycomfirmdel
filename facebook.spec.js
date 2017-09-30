test ('mock return 1',()=>{
  const mockFn = jest.fn()
        .mockReturnValue(1)
  expect(mockFn()).toBe(1)
  })

function auth(authservice) {
  this.auth = authservice

  this.signinwithFB = (phone,password)=>{
    return this.auth(phone,password)
  }

}

test('signinwithFB',()=>{
  const obj = {
    name : 'panumat',
    email : '58160266',
    fbid : 'gdfhiwe'
  }
  const mock = jest.fn('333','2222').mockReturnValue(obj)

  let app = new auth(mock)
  let result = app.signinwithFB('333','2222')

  expect(result).toEqual(obj)
  expect(mock).toBeCalled()
  expect(mock).toBeCalledWith('333','2222')
})
