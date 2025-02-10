import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  StorageReference,
  uploadString,
} from '@angular/fire/storage';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { ToolboxService } from './toolbox.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage,
    private toolboxService: ToolboxService
  ) {}

  getUser(): User | null {
    return this.auth.currentUser;
  }

  // getUserProfile() {
  //   const user: User | null = this.auth.currentUser;
  //   const userDocRef = doc(this.firestore, `users/${user?.uid}`);
  //   return docData(userDocRef, { idField: 'id' });
  // }

  // async uploadImage(cameraFile: Photo): Promise<true | null> {
  //   const user: User | null = this.auth.currentUser;
  //   if (!user) return null;
  //   if (!cameraFile.base64String) return null;

  //   const path = `uploads/${user.uid}/profile.webp`;
  //   const storageRef = ref(this.storage, path);

  //   try {
  //     await uploadString(storageRef, cameraFile.base64String, 'base64');

  //     const imageUrl: string = await getDownloadURL(storageRef);

  //     const userDocRef = doc(this.firestore, `users/${user.uid}`);
  //     await setDoc(userDocRef, {
  //       imageUrl,
  //     });

  //     return true;
  //   } catch (e) {
  //     return null;
  //   }
  // }

  // async changeImage(): Promise<void> {
  //   const image: Photo = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Photos,
  //   });

  //   if (image) {
  //     this.toolboxService.startLoading();

  //     const result: true | null = await this.uploadImage(image);
  //     this.toolboxService.stopLoading();

  //     if (!result) {
  //       this.toolboxService.alert(
  //         'Erro no envio da foto!',
  //         'Ocorreu um problema ao enviar sua foto. Por favor, tente novamente mais tarde.'
  //       );
  //     }
  //   }
  // }
}
