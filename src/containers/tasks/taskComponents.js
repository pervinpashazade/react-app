import React from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import SmallText from '../../components/smallText/SmallText'

export default function taskComponents() {
    return (
        <div className="row mt-3">
            <div className="col-md-4">
                <span>Custom buttons:</span>
                <br />

                <Button />
                <Button isDisabled={true} />
                <Button text={'Btn block'} buttonDisplay={'btn-custom-block'} />
            </div>
            <div className="col-md-4">
                <span>Custom inputs:</span>
                <br />
                <Input inputSize={'input-large'} placeholder={'Large input'} />
                <Input type={'email'} placeholder={'Enter email'} />
                <Input type={'password'} inputSize={'input-small'} placeholder={'Small input / password'} />
            </div>
            <div className="col-md-4">
                <span>Small texts:</span>
                <br />
                <div>
                    <SmallText text={'This is small text'} />
                </div>
                <div>
                    <SmallText text={'Smail text center / danger'} textStyle={'text-danger'} textPosition={'text-center'} />
                </div>
                <div>
                    <SmallText text={'text success / right'} textStyle={'text-success'} textPosition={'text-right'} />
                </div>
            </div>
        </div>
    )
}
