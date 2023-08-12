const createAlert = (msg, type = "danger") => {
    return`<P class="alert alert-${type} d-flex justify-content-between">${msg}
                                <button class="btn-close" data-bs-dismiss="alert"></button>
                            </P>`
}
const isEmail = (email) => {
    const pattern = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
    return pattern.test(email);
};
const isMobile = (mobile) => {
    const pattern =/^(01|\+8801|8801)[0-9]{9,}$/;
    return pattern.test(mobile);
};
