class DocumentService {
  /**
   * REQUEST DILIGENCES REGISTERED
   * @param city_id
   * @param vehicle_type_id
   * @param base
   * @returns Document
   */
  public async requestActivitiesRegistered() {
    const range: any = process.env.RANGE;

    try {
      const urlDocument = "Test";
      return urlDocument;
    } catch (error) {
      return { message: "Document" + error };
    }
  }

  // export async function getImpactAreas() {
  //   try {
  //     const impactAreas = await axios.get(clarisaHost + 'impact-areas', {
  //       auth: {
  //         username: process.env['clarisa_user'],
  //         password: process.env['clarisa_password']
  //       }
  //     });
  //     return impactAreas.data;
  //   } catch (error) {
  //     console.log(error);
  //     throw new APIError(
  //       'NOT FOUND',
  //       HttpStatusCode.NOT_FOUND,
  //       true,
  //       error.message
  //     );
  //   }
  // }
}

const documentservice = new DocumentService();
export default documentservice;
