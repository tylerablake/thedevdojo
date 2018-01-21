import {FormGroup, FormControl} from '@angular/forms';

export interface Post{
    post: FormGroup;
    title: string;
    body: string;
    authorUsername: string;
    createDate: Date;
    updateDate: Date;
    tagsString: string;
}

