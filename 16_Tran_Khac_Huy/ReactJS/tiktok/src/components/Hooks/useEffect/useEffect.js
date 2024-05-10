import { useState } from 'react'
import {
    UseEffectUpdateDom, UseEffectCallApi,
    UseEffectDomEventScroll, UseEffectDomEventResize
} from "./Content";

function UseEffect() {
    const [show, setShow] = useState(false)
    const [updateDOM, setUpdateDom] = useState(false)
    const [callApi, setCallApi] = useState(false)
    const [domEvent, setDomEvent] = useState(false)

    return (
        <div className="UseEffect" style={{ padding: 32 }}>
            <button
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>
            {show && (
                <div>
                    <div>
                        <button
                            onClick={() => setUpdateDom(!updateDOM)}
                        >
                            UseEffectUpdateDom
                        </button>
                        {updateDOM && <UseEffectUpdateDom />}
                    </div>

                    <div>
                        <button
                            onClick={() => setCallApi(!callApi)}
                        >
                            UseEffectCallApi
                        </button>
                        {callApi && <UseEffectCallApi />}
                    </div>

                    <div>
                        <button
                            onClick={() => setDomEvent(!domEvent)}
                        >
                            UseEffectDomEvents
                        </button>
                        {domEvent && (
                            <div>
                                <UseEffectDomEventResize />
                                <UseEffectDomEventScroll />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UseEffect