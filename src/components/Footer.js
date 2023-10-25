import React from "react";
export default function Footer(props) {
    let styles = {
        fontSize: '1em',
        color: 'white',
        textDecoration: 'none',
    };
    return (
        <>
            <footer className="mt-auto footer bg-dark mt-auto py-3">
                <div className="container text-center text-white">
                    <span className=" text-white">
                        <a style={styles} href="https://github.com/siddharth7000/TextUtils">Made with ❤️by siddharth7000.
                        </a>
                    </span>
                </div>
            </footer>
        </>
    );
}