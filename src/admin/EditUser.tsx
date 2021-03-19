import React, { useEffect, PropsWithRef, SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router';
import Wrapper from './Wrapper';

const EditUser = (props: PropsWithRef<any>) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`http://localhost:8090/user/find/${props.match.params.id}`);

                const user = await response.json();

                console.log(user);
                setName(user.name);
                setPhone(user.phone);
                setEmail(user.email);
                setAddress(user.address);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(name, phone, address, email);
        await fetch('http://localhost:8090/user/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf8'
            },
            body: JSON.stringify({
                name,
                address,
                phone,
                email,
            })

        }).then(
            res => console.log(res.json())
        ).catch(console.log);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to='/admin/users' />
    }

    return (
        <Wrapper>
            <div className="col-sm-6 col-md-8">
            <div><label className="lead">EDIT USER</label></div>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" name="name" required
                            defaultValue={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" name="phone" required
                            defaultValue={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" name="address" required
                            defaultValue={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" required
                            defaultValue={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>

            </div>

        </Wrapper>

    );

};
export default EditUser;