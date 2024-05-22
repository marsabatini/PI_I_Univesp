package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.config.FileStorageProperties;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
/*
@Controller
@RequestMapping("/api/files")
public class FileStorageController {

    private final Path fileStorageLocation;

    // Construtor que transforma o caminho relativo em caminho relativo, normalizando-o.
    public FileStorageController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath()
                .normalize();
    }

    // EndPoint para a os uploads
    // ===> REFATORAR: talvez, fosse importante ter um EndPoint específico para as fotos
    // de Profile dos alunos e funcionários, outro para eventais fotos/arquivos para o
    // feed e outro para as avaliações médicas.
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try{
            Path targetLocation = fileStorageLocation.resolve(fileName);
            file.transferTo(targetLocation);

            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/files/download/")
                    .path(fileName)
                    .toUriString();

            // Não é necessário deixar essa URI para o Download.
            return ResponseEntity.ok("Upload completo. Link para download: " + fileDownloadUri);

        } catch(IOException exception){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws IOException{

        Path filePath = fileStorageLocation.resolve(fileName).normalize();

        try {
            Resource resource = new UrlResource(filePath.toUri());
            String contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());

            if(contentType == null)
                contentType = "application/octet-stream";

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" +  resource.getFile() + "\"")
                    .body(resource);

        } catch(MalformedURLException exception){
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/list")
    public ResponseEntity<List<String>> listFiles() throws IOException{

        List<String> fileNames = Files.list(fileStorageLocation)
                .map(Path::getFileName)
                .map(Path::toString)
                .collect(Collectors.toList());

        return ResponseEntity.ok(fileNames);
    }
}
*/