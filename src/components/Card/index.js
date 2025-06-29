import styles from "./Card.module.scss"

export default (Task, Date) => /*html*/`
    <div class="${styles.card__wrapper}">
        ${
            Date.trim() == "" ? `` : `<span class="${styles.card__date}">${Date}</span>`
        }
        <div class="${styles.card__info}">
            <span class="${styles.card__title}">${Task}</span>
            <div class="${styles.card__editor}">
                <button class="${styles.card__edit} ${styles.card__button}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <button class="${styles.card__remove} ${styles.card__button}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <path fill="#fff8f8" d="M14.748 5.891c.89.1 1.591.24 2.133.384c.505.135.87.273 1.119.383c.204.09.31.147.416.218a.75.75 0 0 1-.823 1.254c-.022-.013-.344-.204-1.099-.405c-.865-.231-2.299-.475-4.494-.475c-4.11 0-5.546.851-5.593.88c-.344.222-.829.144-1.031-.214c-.376-.666.209-1.04.209-1.04c.459-.296 1.013-.462 1.534-.6a14.6 14.6 0 0 1 2.133-.385a2.75 2.75 0 0 1 5.496 0m-3.978-.115a28 28 0 0 1 2.46 0a1.25 1.25 0 0 0-2.46 0M6.394 8.758a.75.75 0 0 1 .849.636l1.009 7.066c.089.62.15 1.043.222 1.37c.07.319.141.49.222.615c.18.283.44.507.745.647c.135.062.315.107.64.132c.334.026.762.026 1.388.026h1.394c.654 0 1.101 0 1.45-.028c.34-.026.525-.075.664-.14a1.75 1.75 0 0 0 .753-.686c.078-.131.144-.312.203-.647c.06-.344.103-.79.165-1.44l.656-6.88a.75.75 0 1 1 1.493.142l-.658 6.909c-.059.614-.107 1.118-.178 1.527c-.075.425-.183.806-.393 1.157a3.25 3.25 0 0 1-1.399 1.273c-.37.175-.759.247-1.189.28c-.414.033-.92.033-1.537.033H11.44c-.59 0-1.075 0-1.474-.03c-.414-.032-.789-.1-1.149-.264a3.25 3.25 0 0 1-1.384-1.2c-.213-.333-.333-.695-.423-1.1c-.087-.39-.155-.871-.239-1.456L5.758 9.606a.75.75 0 0 1 .636-.848"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`