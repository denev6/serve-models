from fastapi import UploadFile, HTTPException, status


async def is_valid_size(file: UploadFile):
    if file is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="첨부된 파일이 없습니다.",
        )
    if len(await file.read()) > 5 * 1024 * 1024:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="파일은 5MB 이하만 업로드 가능합니다.",
        )
    return file


async def is_valid_image(file: UploadFile):
    if not file.content_type.startswith("image"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="이미지 파일만 업로드 가능합니다.",
        )
    allowed_ext = ["jpg", "jpeg", "png"]
    file_ext = file.filename.rsplit(".", 1)[-1]
    if file_ext.lower() not in allowed_ext:
        allowed_ext_str = ", ".join(allowed_ext)
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"이미지 확장자는 {allowed_ext_str}만 가능합니다.",
        )
    return file
